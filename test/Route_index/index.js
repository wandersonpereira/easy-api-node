var assert = require('assert');
describe('API', function() {
  describe('API Ok', function() {
    it('Check status API Ok', function() {
      request.get("/")
          .expect(200)
          .end((err, res) => {
            const expected = {status: "Online"};
            expect(res.body).to.equal(expected);
            done(err);
          })
    });
  });
});
