describe('Demoblaze API Tests', () => {
  const baseUrl = 'https://api.demoblaze.com';
  const newUser = {
    username: 'testuser123',
    password: 'testpassword'
  };
  const existingUser = {
    username: 'existinguser',
    password: 'existingpassword'
  };

  it('Create a new user', () => {
    cy.request('POST', `${baseUrl}/signup`, newUser)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include('User created successfully');
      });
  });

  it('Attempt to create an existing user', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/signup`,
      body: existingUser,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.include('This user already exists');
    });
  });

  it('Login with correct credentials', () => {
    cy.request('POST', `${baseUrl}/login`, newUser)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include('Auth token');
      });
  });

  it('Login with incorrect credentials', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: { username: 'wronguser', password: 'wrongpassword' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.include('Invalid credentials');
    });
  });
});
