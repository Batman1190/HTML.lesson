// All 50 lessons data
const lessons = [
    {id: 1, title: "🏗️ HTML Document Structure", category: "Basics", 
     explanation: "Every HTML page starts with special tags that tell the browser 'Hey, this is a webpage!' Think of it like building a house - you need a foundation first! 🏠<br><br><strong>&lt;!DOCTYPE html&gt;</strong> - Tells the browser this is HTML5<br><strong>&lt;html&gt;</strong> - The main container for everything<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> DOCTYPE is like saying 'Hello, I'm speaking HTML!'</div>",
     exercise: "Type this exactly: &lt;!DOCTYPE html&gt;"},

    {id: 2, title: "🧠 Head and Body Sections", category: "Basics",
     explanation: "Every HTML page has two main parts, just like you have a head and a body! 🧒<br><br><strong>&lt;head&gt;</strong> - Information about the page (not visible)<br><strong>&lt;body&gt;</strong> - Everything you see on the page!<br><br>Example:<br><code>&lt;html&gt;<br>  &lt;head&gt; ... &lt;/head&gt;<br>  &lt;body&gt; ... &lt;/body&gt;<br>&lt;/html&gt;</code>",
     exercise: "Create opening and closing body tags: &lt;body&gt;&lt;/body&gt;"},

    {id: 3, title: "📝 The Title Tag", category: "Basics",
     explanation: "The title tag shows up in the browser tab at the top! 📑 It goes inside the &lt;head&gt; section. When you open many tabs, the title helps you know which is which!<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> The title also shows up in search results!</div>",
     exercise: "Create a title that says: My First Page"},

    {id: 4, title: "📏 Headings (Big to Small)", category: "Text",
     explanation: "Headings are like titles in different sizes! 📐<br><br><code>&lt;h1&gt;</code> - Biggest! Like the title of a book 📚<br><code>&lt;h2&gt;</code> - Big, like chapter names<br><code>&lt;h3&gt;</code> - Medium, like sections<br><code>&lt;h4&gt;</code> - Smaller<br><code>&lt;h5&gt;</code> - Even smaller<br><code>&lt;h6&gt;</code> - Smallest!",
     exercise: "Create an h1 heading that says: Welcome!"},

    {id: 5, title: "📄 Paragraphs", category: "Text",
     explanation: "Paragraphs are for regular text, like in a story! 📖 We use the &lt;p&gt; tag (p for paragraph). Each paragraph starts on a new line with space around it.<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> Most text on websites is in paragraphs!</div>",
     exercise: "Create a paragraph: HTML is fun!"},

    {id: 6, title: "↩️ Line Breaks", category: "Text",
     explanation: "Sometimes you want to break to a new line without starting a new paragraph! ↩️ Use &lt;br&gt; - it's a special tag that doesn't need a closing tag!<br><br>Example: <code>Line one&lt;br&gt;Line two</code>",
     exercise: "Type: &lt;br&gt;"},

    {id: 7, title: "➖ Horizontal Lines", category: "Text",
     explanation: "Want to draw a line across your page? Use &lt;hr&gt;! ➖ It's great for separating different sections! Like &lt;br&gt;, it doesn't need a closing tag.<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> HR stands for 'Horizontal Rule'!</div>",
     exercise: "Type: &lt;hr&gt;"},

    {id: 8, title: "💪 Bold Text", category: "Text",
     explanation: "Make text <strong>BOLD and STRONG</strong>! 💪 Use &lt;strong&gt; for important text that should be bold. You can also use &lt;b&gt; for bold (but strong is better!)",
     exercise: "Make this bold: Super Cool!"},

    {id: 9, title: "📐 Italic Text", category: "Text",
     explanation: "Make text <em>lean to the side</em> with italics! 📐 Use &lt;em&gt; for emphasized text (it makes it italic). You can also use &lt;i&gt; for italic text.",
     exercise: "Make this italic: Amazing"},

    {id: 10, title: "🖍️ Highlighted Text", category: "Text",
     explanation: "Highlight text like using a yellow marker! 🖍️✨ Use the &lt;mark&gt; tag to make text stand out!<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> It usually makes text yellow, like a highlighter!</div>",
     exercise: "Highlight this word: Important"},

    {id: 11, title: "🔗 Creating Links", category: "Links",
     explanation: "Links let you jump to other pages! 🔗🦘 Use &lt;a&gt; tag (a for 'anchor'). Add <strong>href</strong> to say where to go!<br><br>Example: <code>&lt;a href='https://google.com'&gt;Go to Google&lt;/a&gt;</code>",
     exercise: "Create a link to https://example.com that says: Click Here"},

    {id: 12, title: "🪟 Links in New Tabs", category: "Links",
     explanation: "Make links open in a NEW tab! 🪟 Add <strong>target='_blank'</strong> to the link!<br><br>Example: <code>&lt;a href='page.html' target='_blank'&gt;Open New Tab&lt;/a&gt;</code>",
     exercise: 'Create a link with target="_blank" to # that says: New Tab'},

    {id: 13, title: "🖼️ Adding Images", category: "Media",
     explanation: "Add pictures to your page! 🖼️📷 Use &lt;img&gt; with <strong>src</strong> (source) for the image location. Add <strong>alt</strong> for description (important!)<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> Alt text helps people who can't see images!</div>",
     exercise: 'Create an image with src="cat.jpg" and alt="A cute cat"'},

    {id: 14, title: "📐 Image Size", category: "Media",
     explanation: "Control how big your images are! 📐 Use <strong>width</strong> and <strong>height</strong> attributes.<br><br>Example: <code>&lt;img src='pic.jpg' width='200' height='100' alt='pic'&gt;</code>",
     exercise: 'Create an img tag with src="dog.jpg" alt="Dog" width="150"'},

    {id: 15, title: "📋 Bullet Lists", category: "Lists",
     explanation: "Make lists with bullet points! 📋 •<br><br>&lt;ul&gt; starts the list (unordered list)<br>&lt;li&gt; for each item (list item)<br>&lt;/ul&gt; ends the list",
     exercise: "Create a ul with one li that says: Apples"},

    {id: 16, title: "🔢 Numbered Lists", category: "Lists",
     explanation: "Make lists with numbers! 🔢<br><br>&lt;ol&gt; starts the list (ordered list)<br>&lt;li&gt; for each item<br>&lt;/ol&gt; ends the list<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> The numbers appear automatically!</div>",
     exercise: "Create an ol with one li that says: First Step"},

    {id: 17, title: "📦 Container Divs", category: "Structure",
     explanation: "Divs are like invisible boxes to group things! 📦 &lt;div&gt; helps organize your page into sections. Think of it like putting toys in different boxes!",
     exercise: "Create a div with the text: Hello Inside"},

    {id: 18, title: "✨ Span for Small Parts", category: "Structure",
     explanation: "Span is for styling small parts of text! ✨ It's like a div, but for tiny pieces inside a line.<br><br>Example: <code>&lt;p&gt;This is &lt;span&gt;special&lt;/span&gt; text&lt;/p&gt;</code>",
     exercise: "Create a span with the text: Highlight"},

    {id: 19, title: "📊 Creating Tables", category: "Tables",
     explanation: "Tables organize information in rows and columns! 📊<br><br>&lt;table&gt; - starts the table<br>&lt;tr&gt; - table row<br>&lt;td&gt; - table data (cell)",
     exercise: "Create a table with one tr and one td that says: Cell"},

    {id: 20, title: "📋 Table Headers", category: "Tables",
     explanation: "Table headers are bold titles for columns! 📋 Use &lt;th&gt; instead of &lt;td&gt; for headers.<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> TH makes text bold automatically!</div>",
     exercise: "Create a table with one tr and one th that says: Name"},

    {id: 21, title: "📝 Forms Basics", category: "Forms",
     explanation: "Forms let people type information! 📝✍️ &lt;form&gt; is the container for all form elements. Forms can have buttons, text boxes, and more!",
     exercise: "Create opening and closing form tags"},

    {id: 22, title: "⌨️ Text Input", category: "Forms",
     explanation: "Text inputs let people type! ⌨️ Use &lt;input type='text'&gt;<br><br>Example: <code>&lt;input type='text' placeholder='Type here'&gt;</code>",
     exercise: 'Create: &lt;input type="text"&gt;'},

    {id: 23, title: "🔒 Password Input", category: "Forms",
     explanation: "Password inputs hide what you type! 🔒 •••• Use &lt;input type='password'&gt;<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> It shows dots instead of letters!</div>",
     exercise: 'Create: &lt;input type="password"&gt;'},

    {id: 24, title: "📧 Email Input", category: "Forms",
     explanation: "Email inputs are for email addresses! 📧 Use &lt;input type='email'&gt; The browser checks if it's a real email format!",
     exercise: 'Create: &lt;input type="email"&gt;'},

    {id: 25, title: "🔢 Number Input", category: "Forms",
     explanation: "Number inputs are just for numbers! 🔢 Use &lt;input type='number'&gt; You can only type numbers, not letters!",
     exercise: 'Create: &lt;input type="number"&gt;'},

    {id: 26, title: "📝 Textarea", category: "Forms",
     explanation: "Textarea is for LOTS of text! 📝📄 It's bigger than a regular input box. Perfect for messages or comments!",
     exercise: "Create: &lt;textarea&gt;&lt;/textarea&gt;"},

    {id: 27, title: "🔘 Buttons", category: "Forms",
     explanation: "Buttons can be clicked! 🔘👆 &lt;button&gt; makes a clickable button.<br><br>Example: <code>&lt;button&gt;Click Me!&lt;/button&gt;</code>",
     exercise: "Create a button that says: Press"},

    {id: 28, title: "⭕ Radio Buttons", category: "Forms",
     explanation: "Radio buttons let you pick ONE option! ⭕ Use &lt;input type='radio'&gt;<br><br>Example: <code>&lt;input type='radio' name='choice'&gt; Yes</code>",
     exercise: 'Create: &lt;input type="radio"&gt;'},

    {id: 29, title: "☑️ Checkboxes", category: "Forms",
     explanation: "Checkboxes let you pick MANY options! ☑️✓ Use &lt;input type='checkbox'&gt; You can check as many as you want!",
     exercise: 'Create: &lt;input type="checkbox"&gt;'},

    {id: 30, title: "📋 Dropdown Lists", category: "Forms",
     explanation: "Dropdowns show a list of choices! 📋⬇️<br><br>&lt;select&gt; - starts the dropdown<br>&lt;option&gt; - each choice<br><br>Example:<br><code>&lt;select&gt;<br>  &lt;option&gt;Red&lt;/option&gt;<br>&lt;/select&gt;</code>",
     exercise: "Create a select with one option that says: Blue"},

    {id: 31, title: "🏷️ Labels for Inputs", category: "Forms",
     explanation: "Labels describe what an input is for! 🏷️ &lt;label&gt; makes forms easier to use.<br><br>Example:<br><code>&lt;label&gt;Name:&lt;/label&gt;<br>&lt;input type='text'&gt;</code>",
     exercise: "Create a label that says: Email:"},

    {id: 32, title: "🎯 Fieldset Groups", category: "Forms",
     explanation: "Fieldset groups related form parts! 🎯📦 It draws a box around form elements. &lt;legend&gt; gives it a title!",
     exercise: "Create: &lt;fieldset&gt;&lt;/fieldset&gt;"},

    {id: 33, title: "💬 Blockquote", category: "Text",
     explanation: "Blockquote is for quotes from others! 💬' Use &lt;blockquote&gt; for long quotes.<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> It usually indents the text!</div>",
     exercise: "Create a blockquote that says: Stay curious!"},

    {id: 34, title: "💻 Code Tag", category: "Text",
     explanation: "Show computer code with &lt;code&gt;! 💻 It makes text look like code (monospace font).",
     exercise: "Create a code tag that says: console.log()"},

    {id: 35, title: "📃 Preformatted Text", category: "Text",
     explanation: "&lt;pre&gt; keeps all your spaces and line breaks! 📃 Perfect for code or poetry! It respects every space you type!",
     exercise: "Create: &lt;pre&gt;&lt;/pre&gt;"},

    {id: 36, title: "🔤 Abbreviations", category: "Text",
     explanation: "Explain abbreviations with &lt;abbr&gt;! 🔤 Use title to show full meaning.<br><br>Example: <code>&lt;abbr title='HyperText Markup Language'&gt;HTML&lt;/abbr&gt;</code>",
     exercise: 'Create an abbr with title="Cascading Style Sheets" that shows: CSS'},

    {id: 37, title: "📮 Address Tag", category: "Text",
     explanation: "&lt;address&gt; is for contact information! 📮 Use it for email, phone, or location.",
     exercise: "Create an address tag that says: 123 Main St"},

    {id: 38, title: "🎵 Audio Tag", category: "Media",
     explanation: "Play sounds with &lt;audio&gt;! 🎵🔊 Use <strong>src</strong> for the audio file. Add <strong>controls</strong> to show play/pause buttons!<br><br>Example: <code>&lt;audio src='song.mp3' controls&gt;&lt;/audio&gt;</code>",
     exercise: 'Create: &lt;audio controls&gt;&lt;/audio&gt;'},

    {id: 39, title: "🎬 Video Tag", category: "Media",
     explanation: "Play videos with &lt;video&gt;! 🎬📹 Use <strong>src</strong> for the video file. Add <strong>controls</strong> so people can play it!",
     exercise: 'Create: &lt;video controls&gt;&lt;/video&gt;'},

    {id: 40, title: "🪟 Iframe", category: "Media",
     explanation: "Iframe shows another webpage inside yours! 🪟 Like a window to another website!<br><br>Example: <code>&lt;iframe src='https://example.com'&gt;&lt;/iframe&gt;</code>",
     exercise: 'Create: &lt;iframe src="page.html"&gt;&lt;/iframe&gt;'},

    {id: 41, title: "📦 Section Tag", category: "Semantic",
     explanation: "&lt;section&gt; groups related content! 📦 It's like chapters in a book. Better than just using div!<br><br><div class='fun-fact'><strong>🎈 Fun Fact:</strong> Helps search engines understand your page!</div>",
     exercise: "Create: &lt;section&gt;&lt;/section&gt;"},

    {id: 42, title: "📰 Article Tag", category: "Semantic",
     explanation: "&lt;article&gt; is for standalone content! 📰 Like a blog post or news story. It makes sense on its own!",
     exercise: "Create: &lt;article&gt;&lt;/article&gt;"},

    {id: 43, title: "🎩 Header Tag", category: "Semantic",
     explanation: "&lt;header&gt; is for the top of your page! 🎩⬆️ Usually has the title and navigation. Different from &lt;head&gt; - this one is visible!",
     exercise: "Create: &lt;header&gt;&lt;/header&gt;"},

    {id: 44, title: "👟 Footer Tag", category: "Semantic",
     explanation: "&lt;footer&gt; is for the bottom of your page! 👟⬇️ Usually has copyright info, links, and contact details.",
     exercise: "Create: &lt;footer&gt;&lt;/footer&gt;"},

    {id: 45, title: "🧭 Nav Tag", category: "Semantic",
     explanation: "&lt;nav&gt; is for navigation menus! 🧭 Use it for your site's main links. It helps people (and search engines) find important pages!",
     exercise: "Create: &lt;nav&gt;&lt;/nav&gt;"},

    {id: 46, title: "🎯 Main Tag", category: "Semantic",
     explanation: "&lt;main&gt; holds your main content! 🎯 There should only be ONE main tag per page. It's the most important part!",
     exercise: "Create: &lt;main&gt;&lt;/main&gt;"},

    {id: 47, title: "📌 Aside Tag", category: "Semantic",
     explanation: "&lt;aside&gt; is for side content! 📌 Like a sidebar with related info. Think of it like a sticky note on the side!",
     exercise: "Create: &lt;aside&gt;&lt;/aside&gt;"},

    {id: 48, title: "🖼️ Figure Tag", category: "Semantic",
     explanation: "&lt;figure&gt; groups images with captions! 🖼️ It's a container for images, diagrams, or illustrations. Often used with &lt;figcaption&gt;!",
     exercise: "Create: &lt;figure&gt;&lt;/figure&gt;"},

    {id: 49, title: "📝 Figcaption", category: "Semantic",
     explanation: "&lt;figcaption&gt; is a caption for figures! 📝 It describes what's in the figure. Goes inside &lt;figure&gt; tags!",
     exercise: "Create a figcaption that says: My Photo"},

    {id: 50, title: "🎁 Details and Summary", category: "Semantic",
     explanation: "&lt;details&gt; creates a dropdown widget! 🎁 &lt;summary&gt; goes inside and shows the clickable part. Click it to show/hide content!<br><br>Example:<br><code>&lt;details&gt;<br>  &lt;summary&gt;Click Me&lt;/summary&gt;<br>  Hidden text here!<br>&lt;/details&gt;</code>",
     exercise: "Create: &lt;details&gt;&lt;summary&gt;Click Me&lt;/summary&gt;&lt;/details&gt;"}
];
