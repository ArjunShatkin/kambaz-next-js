import Image from "next/image";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Labs</h1>
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        <p>
          Text documents are often broken up into several sections and
          subsections. Each section is usually prefaced with a short title or
          heading that attempts to summarize the topic of the section it
          precedes. For instance, this paragraph is preceded by the heading
          Heading Tags. The font of the section headings is usually larger and
          bolder than their subsection headings. This document uses headings
          to introduce topics such as HTML Documents, HTML Tags, Heading Tags,
          etc. HTML heading tags can be used to format plain text so that it
          renders in a browser as large headings. There are 6 heading tags for
          different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest
          heading and h6 is the smallest heading.
        </p>
      </div>

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p>
          This is a paragraph. We often separate a long set of sentences with
          vertical spaces to make the text easier to read. Browsers ignore
          vertical white spaces and render all the text as one single set of
          sentences. To force the browser to add vertical spacing, wrap the
          paragraphs you want to separate with the paragraph tag.
        </p>
        <p>
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p>
          This is the second paragraph. Even though there is a deliberate
          white gap between the paragraph above and this paragraph, browsers
          render them as one contiguous piece of text by default.
        </p>
        <p>
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        <p>How to make pancakes:</p>
        <ol>
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>

        <h5>My Favorite Recipe</h5>
        <p>How to make Chicken Tikka Masala:</p>
        <ol>
          <li>Marinate chicken in yogurt, lemon juice, and spices.</li>
          <li>Grill or sear the chicken until cooked through.</li>
          <li>Simmer onions, garlic, ginger, tomatoes, and cream with spices.</li>
          <li>Add the cooked chicken pieces to the sauce and simmer.</li>
          <li>Serve hot with rice or naan.</li>
        </ol>

        <h5>{`Unordered List Tag`}</h5>
        <p>{`My favorite books:`}</p>
        <ul>
          <li>{`Dune`}</li>
          <li>{`Lord of the Rings`}</li>
          <li>{`Ender's Game`}</li>
          <li>{`Red Mars`}</li>
          <li>{`The Forever War`}</li>
        </ul>
      </div>

       
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>88</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="wd-images">
        <h4>Image Tag</h4>
        <p>Loading an image from the internet:</p>
        <Image
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          width={400}
          height={300}
          alt="Starship"
        />
        <p>Loading a local image:</p>
        <Image src="/images/teslabot.jpg" width={200} height={200} alt="Tesla Bot" />
      </div>

      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form>
          <h5>Text Fields</h5>
          <label htmlFor="username">Username:</label>
          <input placeholder="jdoe" id="username" /> <br />
          <label htmlFor="password">Password:</label>
          <input type="password" defaultValue="123@#$asd" id="password" /> <br />
        </form>

        <h5>Text Area</h5>
        <textarea
          id="wd-textarea"
          cols={30}
          rows={10}
          defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
        />

        <h5>Radio Buttons</h5>
        <input type="radio" id="radio1" name="genre" />
        <label htmlFor="radio1">Comedy</label>
        <br />
        <input type="radio" id="radio2" name="genre" />
        <label htmlFor="radio2">Drama</label>
        <br />

        <h5>Checkboxes</h5>
        <input type="checkbox" id="chk1" />
        <label htmlFor="chk1">Comedy</label>
        <br />
        <input type="checkbox" id="chk2" />
        <label htmlFor="chk2">Drama</label>
        <br />

        <h5>Dropdowns</h5>
        <label htmlFor="select-one">Select one:</label>
        <select id="select-one" defaultValue="SCIFI">
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option value="SCIFI">Science Fiction</option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <br />
        <label htmlFor="select-many">Select many:</label>
        <select id="select-many" multiple size={4}>
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option value="SCIFI">Science Fiction</option>
          <option value="FANTASY">Fantasy</option>
        </select>
      </div>

      <h4>Anchor Tag</h4>
      <p>
        Please <a href="https://www.lipsum.com" id="wd-lipsum">click here</a> to get dummy text.
      </p>
    </div>
  );
}
