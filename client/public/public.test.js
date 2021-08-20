const fs = require("fs");
const path = require("path");

describe("head testing login page", () => {
  let html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

  //===== use this if you're bring in an entire file =====//

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test("the title has been changed from the default", () => {
    let title = document.querySelector("title");
    expect(title.textContent).not.toEqual("Document");
  });

  test("css link is not # (default)", () => {
    let css = document.querySelector('link[rel="stylesheet"]');
    expect(css.getAttribute("href")).not.toEqual("#");
  });

  test("css links to a file with .css as its extension", () => {
    let css = document.querySelector('link[rel="stylesheet"]');
    let link = css.getAttribute("href");
    let result = /.css$/i.test(link);
    expect(result).toBeTruthy();
  });

  test("the correct google fonts are linked", () => {
    const links = document.querySelectorAll("link");
    console.log(links);
    let linkMatch = false;
    for (let i = 0; i < links.length; i++) {
      if (links[i].href === "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap") {
        linkMatch = true;
        break;
      }
    }
    expect(linkMatch).toBeTruthy();
  });
});
