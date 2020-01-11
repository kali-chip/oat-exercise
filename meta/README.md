**Important notice:** This is the README for the exercise itself. It will contain any additional
instructions, considerations, explanations of the decisions made, etc. There is a README file for
the project in the main root folder.

# General considerations on the exercise

The instructions of the exercise are quite general and abstract. It only calls for "a list of users" and this leaves a lot of field to explore and consider.

I have taken a look at the given URL (http://hr.oat.taocloud.org/api/) and it provides a Swagger service to test **two** provided end-points.

The first end-point is /users and it provides a way to not only get the full list of users, but also to _search_ against partial names. The second endpoint, /user/{userId} can provide the full details for a single user. Having these two services means that we _could_ not only build a list but also let the user click on each item and retrieve the additional data. If I do implement this or not is something that I will decide later, but for now it is a nice feature to add to the component.

## Requirements and Restrictions

The original instructions provide no additional requirements or restrictions whatsoever other than using only "JavaScript". I understand that this not only disallows using TypeScript, but also any other _compile-to-js_ languages. I do not know if this includes some particular tools and technologies which are not languages but still require a compilation step, such as Svelte, JSX, some component oriented frameworks that require compilation, or even using Babel. Just to be safe, I will be avoiding all of this.

The only concession in this regard I will be making is that I _will_ use a simpler module bundler such as Browserify. Being able to use modules is necessary to reach a minimum of order and structure.

I will make the following decisions:

 - I will be using _node.js-style_ modules (`require`) and then bundling with _Browserify_.
 - I will be targetting reasonably recent browsers. This means that while I won't be using Babel, I will use some solidly- and well-supported features of ES6.
 - I'll use a smaller structural framewrok: [Mithril.js](https://mithril.js.org/).
 - I would generally use Mocha for testing but as Mithril comes with _`ospec`_ integrated, I will use that for running my tests.

The project will be published on Github, here: https://github.com/kali-chip/oat-exercise

