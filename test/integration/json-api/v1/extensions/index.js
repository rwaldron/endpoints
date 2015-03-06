// FIXME: This has changed: https://github.com/json-api/json-api/commit/663ad0977d9e8786a28be259b12f0a17cb0987da
describe('extensions', function () {

  it('must require relevant extensions in the content-type header');

  // The base JSON API specification MAY be extended to support
  // additional capabilities.

  it('should return supported extensions in the Content-Type header of every response');
  it('must render supported extensions as a comma-separated list');

  // Clients MAY request a particular media type extension by
  // including its name in the ext media type parameter with the
  // Accept header.

  it('must not reject requests with supported media extensions in the Accept header');
  it('must reject requests with unsupported media extensions in the Accept header with a 415 status');

  describe('officialExtensions', function() {

    require('./bulk');
    require('./patch');

  });

  describe('customExtensions', function() {
    it('should be specified using the ext media type parameter');
    it('should have its ext media type be prefixed with a unique identifier for the organization');
  });

  describe('profiles', function() {
    it('should be specified in the top-level meta object, keyped by profile');
  });
});
