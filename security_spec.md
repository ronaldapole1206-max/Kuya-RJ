# Security Specification for L'Essence

## 1. Data Invariants
- A user profile must have a valid `uid` matching the document ID.
- Users can only read and write their own profile data.
- User email must be a valid email format.
- `createdAt` must be set to the server timestamp upon creation and remains immutable.

## 2. The Dirty Dozen Payloads
1. **Identity Spoofing**: Create a profile with `uid: "attacker"` but authenticated as `victim`.
2. **Resource Poisoning**: High-size string (1MB) as `displayName`.
3. **ID Poisoning**: Use a 1KB string as the userId in the path `users/{userId}`.
4. **Email Hijacking**: Unverified user trying to set their email to an admin's email.
5. **Timestamp Grafting**: Setting `createdAt` to a date in the past from the client.
6. **Immutable Update**: Trying to change `uid` in an existing profile.
7. **Unauthorized Read**: User A trying to `get` User B's profile.
8. **Shadow Field Injection**: Adding `isAdmin: true` to a profile update.
9. **Blanket Query**: Requesting `getDocs(collection(db, "users"))` without filters.
10. **Type Mismatch**: Sending a number for the `email` field.
11. **Negative Size**: Sending an empty string for `uid`.
12. **Foreign Linkage**: Creating a user profile with an `email` that doesn't match the auth token.

## 3. Test Runner (Mock Logic)
- `npm run lint:rules` will check against these.
