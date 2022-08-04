This is the badasushi website development github.

Issues:
    Currently @mui/styles doesnt support react 18 so hopefully that is resolved when they update mui

    Css is written into the js so it would be good if we can transfer most of it to a single css file for optimization reasons.

    Currently our menu system is kinda messy in terms of optimizing for all screen sizes.

    Navbars are specified for every page differently. Hopefully we can optimize this with just one js nav

    Home page has some sizing/scaling issues

    Mobile menu needs a rework to make it easier
    
    Main menu system requires some handwork to make it look prettier and limit item count on each category




Menu system is worked like this
    main product page --> submodule product --> individual item call

    


Login
    Runs off of Firebase Auth
        Code is hopefully straight forward with just func calls to server
        Scalable and can add data fields

Payment
    Runs off commerce JS
    
    Connected with menu system

    This is a quick fix/ solution so we should try to move off of their platform to avoid the fees

    Currently uses commercejs and stripe connection (Most secure to do this without need of extensive backend proccesses)

Commerce JS and Airbase
    Currently Airbase webhooked for auto text to suppliers...

    Needs a supplier interface for the users









