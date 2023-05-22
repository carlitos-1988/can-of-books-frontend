# Software Requirements

## Vision

1. What is the vision of this product?

    - Scheduling is the most important part of a business when it comes to employee care and business viability. This application was born from the idea and anecdote from one of our developers that not all scheduling environments are created equal. Even those who work in critical environments such as a hospital/medical center can be subject to outdated scheduling, creating chaotic situations and employee dissatisfaction. This application aims to take a lightweight approach as an alternative and free means to improve this vital process of the workplace.

    This application aims to assist those who are working without a stable scheduling platform so they can better approach a workday with full transparency and flexibility.

    Many companies do not have the budget or management insight to take on the fiscal and corporate responsibility of replacing an outdated scheduling platform. While this application is specifically designed for the hospital worker, it is flexible enough to be integrated into any work environment.


## Scope (In/Out)

1. IN - What will your product do

    - Describe the individual features that your product will do.

    - High overview of each. Only need to list 4-5

        - The app will provide workers a place to add in their calendar information so that when changes are made they are e-mailed to that individual worker.
        - The app will be able to differentiate between different levels of user role by accessing a dropdown list.
        - The app will be able to show a calendar with 3 time intervals for morning, afternoon, and night shifts.
        - The app will be able to create, update, and delete scheduling information and store this information in a database.
        - The app will provide provide a global view of the scheduling information.

2. OUT - What will your product not do.

    - The app will not be a mobile application to be downloaded on an app store.
    - The app will not be a recommended replacement for any enterprise scheduling software.

### Minimum Viable Product

1. What will your MVP functionality be?

    - Display a full schedule of all users in 3 segments, morning afternoon and night for current work week.
    - Use 0Auth to facilitate user access
    - Update existing database schedule information with new schedule information and have that update e-mailed to the affected user.
    - Define user roles upon creation and be able to drill down into a role based view of the schedule.

1. What are your stretch goals?

    - Create admin access
    - Calendar integration
    - Create a supplemental section in the app for common use calculations specific to the field of nursing.

## Functional Requirements

1. List the functionality of your product. This will consist of tasks such as the following:

    - A user can create and update profile information
    - A user can access all relevant scheduling information to them
    - a user can filter through scheduling information based on admin defined roles
    - a user will have an e-mail sent to them upon successful change to the database
    - 

### Data Flow

    1. A new user is presented with a login screen that allows them to either use an existing login or create a new account with an e-mail and password or authentication with Google.
    2. A user is then presented with information relevant to what type of user they are. If they are a new user, they will be presented with a home page with an option to add their information to the database. If they are an existing user, they will be presented with current schedule information including a calendar view.
    3. Users will then be able to navigate through the application with a nav bar that displays a component that drops down to show different levels of the application.
    4. Depending on user access, user will be able to add, change, or delete scheduling information of a user.
    5. If a user has admin access, they will be able to drill down and change scheduling information of a user.
    6. If a user has basic access, they can drill down the schedule information based on the level of a user.  

## Non-Functional Requirements

1. Security

    - The application must have a responsive design that adapts to different screen sizes and devices.

    - The application must provide clear instructions and error messages to the user.

    - The application must have an intuitive user interface with easily recognizable icons and visual cues.

    - The application must have a fast repsonse time and load within a certain amount of time.

2. Usability

    - The application must be designed with modularity and componetizaiton at the forefront, making it easy to test individual components and features.

    - The application must have a clear API for integration testing and third party integration.

    - The application must be easy to deploy and maintain with documentation for installation and updates.

    - The application must be able to log errors and exceptions to aid in debugging.