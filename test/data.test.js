describe("types", () => {
  let data, types;
  before(async () => {
    data = await (await fetch("src/data.json")).json();
    types = data.maxtremaine.meta.types;
  });
  it("Should have all of the types", async () => {
    const expectedTypes = ["contact", "article", "book", "quote", "resume"];
    chai.assert.hasAllKeys(types, expectedTypes);
  });
  it("Should validate contacts", () => {
    for (const contact of Object.values(data.maxtremaine.data.contact)) {
      for (const key in types.contact) {
        chai.assert.equal(types.contact[key], typeof contact[key]);
      }
    }
  });
  it("Should validate articles", () => {
    for (const article of Object.values(data.maxtremaine.data.articles)) {
      for (const key in types.article) {
        chai.assert.equal(types.article[key], typeof article[key]);
      }
    }
  });
  it("Should validate books", () => {
    for (const book of Object.values(data.maxtremaine.data.favouriteBooks)) {
      for (const key in types.book) {
        chai.assert.equal(types.book[key], typeof book[key]);
      }
    }
  });
  it("Should validate quotes", () => {
    for (const quote of Object.values(data.maxtremaine.data.favouriteQuotes)) {
      for (const key in types.quote) {
        chai.assert.equal(types.quote[key], typeof quote[key]);
      }
    }
  });
  it("Should validate resume", () => {
    for (const job of Object.values(data.maxtremaine.data.resume)) {
      for (const key in types.resume) {
        chai.assert.equal(types.resume[key], typeof job[key]);
      }
    }
  });
});
