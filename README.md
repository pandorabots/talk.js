talk.js
=======

Talk to a Pandorabot directly from your browser. The talk.js plugin keeps track of your users by storing a cookie, allowing predicates to persist across sessions.

Requirements
------------

You can obtain an `app_id` and `user_key` by signing up for a plan at the [Pandorabots Developer Portal](https://developer.pandorabots.com). 

You can create and compile a bot using the cURL commands found in the [Pandorabots API Documentation](https://developer.pandorabots.com/docs).

NOTE: Because this is browser-side code, your user key will be visible to the public! In order to protect the use of your account, make sure to set your domain as the allowed referrer for the application you created on the Developer Portal. 

Example use
------------

```javascript
var pb = new Pandorabot("aiaas.pandorabots.com", YOUR_APP_ID, YOUR_BOTNAME, YOUR_USER_KEY);
pb.talk("Hello", function(data) {
  var response = data["responses"];
  console.log(response);
});
```

For a more detailed look, take a look at the boilerplate example included with this repository.  

