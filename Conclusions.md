# Conclusions

## Findings

1. **Create a new user**:
   - Successfully creates a new user with a status of 200 and a success message.

2. **Attempt to create an existing user**:
   - Incorrectly returns a status of 200 instead of 400, also no includes a message indicating the user already exists.

3. **Login with correct credentials**:
   - Successfully logs in with correct credentials, returning a status of 200.

4. **Login with incorrect credentials**:
   - Incorrectly returns a status of 200 instead of 401, also no includes a message indicating invalid credentials.

## Recommendations

-Ensure the user registration and login API endpoints handle edge cases effectively.
-Validate error messages and status codes to ensure they are informative and accurate.
-The API should return appropriate HTTP status codes for different scenarios (e.g., 400 for existing user during signup, 401 for invalid login credentials).
-Improve the clarity of confirmation messages to ensure users understand the results of their actions.
