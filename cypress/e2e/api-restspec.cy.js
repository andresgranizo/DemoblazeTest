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
      });
  });


  it('Attempt to create an existing user', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/signup`,
      body: newUser,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(response);
    });
  });


  it('Login with correct credentials', () => {
    cy.request('POST', `${baseUrl}/login`, newUser)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });


  it('Login with incorrect credentials', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: { username: 'wronguser', password: 'wrongpassword' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
