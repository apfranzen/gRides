http://galvanize-student-apis.herokuapp.com/gdating/

# gDating Mockups and Stories

This is an overview of features for completion of the application. This is a lot!

## Be sure to read ALL stories before starting to write a single line of code. Prioritize your work first and get to what you can.

A CSV file of the stories that can be imported to pivotal tracker can be downloaded [here](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/138/gdating_stories.csv).

Note that each story in the tracker CSV has several sub-tasks associated with it.

# Mockups and Stories

Overall, you may design the app how you like! We have intentionally tried to keep the data malleable and randomized so that you can create whatever you want.

You will need at least the following pages:

* [Home Page](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/home.png)
* [Register](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/register.png) & [Login](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/login.png)
* [Members (all)](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/members.png)
* Single Member ([matched](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/member-matched.png) & [unmatched](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/member-unmatched.png))
* [Search](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/search.png)
* [User Profile](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/profile.png)

# Overall

###  As a user, if the site is loading I would like some indication as to what is happening.
* [ ] Anywhere that you are hitting the server and waiting for information, you should have some loading animation visible so the user knows what’s happening.

###  As a user, I want urls to be human readable.
* [ ] You should not use IDs as part of the routes but instead should use the slug field on each user. For example, /members/my-slug-name should return the profile of the user with the slug: my-slug-name.

### As an admin, I want permissions on my site to work correctly so that users can only access the site if they’ve signed up to be a user.
* [ ] The only pages that should be available to a non logged in user is the home page, login page, and register page.


## Landing Page

![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/home.png)

### As a user, I want an exciting landing page where I can get started with an account.
* [ ] Includes a Get Started Button
* [ ] Includes a “Testimonials” slider
* [ ] Includes buttons for logging in and registering

## Register

![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/register.png)

### As a user, I want to be able to sign-up for an account and be immediately logged in
* [ ] If the user is already logged in, they should be redirected to the /members page
* [ ] Include client side validation
* [ ] Expect server side validation and return errors to user
* [ ] If successful, login the user immediately and redirect them to the /members page

## Login

![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/login.png)

### As a user, I want to be able to login to the site with my username and password.
* [ ] If the user is already logged in, they should be redirected to the /members page
* [ ] Return any errors from the server to the user
* [ ] If successful, login the user and redirect them to the /members page

## Logout

### As a user, I want to be able to logout from the site.
* [ ] Logs the user out of the site and redirects them to the homepage

## Members Pages

![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/members.png)

### As a user, I want a view where I can see all members, categorized in different ways.
* [ ] Users should be shown with at least their photo, username, and some identifying information
* [ ] Users can be sorted by Popularity where popularity is defined as those users having the most relative matches
* [ ] Users can be sorted by Location where that is defined by within 20 miles of the current user
* [ ] Users can be sorted by Matches, where the user only sees those people with whom he has matched (this can be either the member has “liked” the user, the user has “liked” the member, or both)
* [ ] Users can be sorted by Conversation, where the user only sees people with whom he has started a conversation

#### Matched
![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/member-matched.png)

#### Unmatched
![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/member-unmatched.png)

### As a user, when I click on a members’ listing, I want to see more information about them and the conversation we have (if any).
* [ ] When a listing item is clicked, a sub-view pops up that shows more information about the user and whatever messages have transpired between them
* [ ] Some statistics should be shown about the member. For example, if they’re popular, if they’re near the user, or if the member likes the user
* [ ] The user should be able to type new messages and click send OR hit enter to send a new message. The message should immediately appear as part of the conversation.
* [ ] If both the member and the user have “liked” each other, more information should be shown about the member including their location.
* [ ] _Stretch:_ Using sockets, have it so that if the member sends a message, it appears as on the user’s screen.


# Search Page

![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/search.png)

### As a user, I want a page where I can search for people based on a number of requirements.
* [ ] Two different types of search should be implemented: one where all of the inputs above must match and another where any can match (i.e. exclusive vs inclusive)
* [ ] You must at least be able to search for username, email, gender, interested in, and age. You can decide what else is available to be searched for.
* [ ] If the user clicks on a matched member, they should be brought to the /members sub-view with that member selected.

## Profile Page

![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/profile.png)

### As a user, I want a page where I can edit my account information.
* [ ] As you get to decide what information is available to the user, you can decide the fields. Note though that username, email, and slug cannot be changed.
* [ ] Client-side validation should be present on all applicable fields.
* [ ] Any errors from the server should be returned to the user.
* [ ] As you edit the information, there should be a “profile preview” that dynamically updates changes to show what the final result will look like.

## Deactivate

### As a user, I want to be able to deactivate my account.
* [ ] There should be a “Delete My Account” button that first confirms with the user that they want to delete and then deactivates and logs out the user.
* [ ] That user should no longer be able to login.
* [ ] That user should no longer show up in results in search or on the /members page.
