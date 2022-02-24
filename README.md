##Natwest test
Solution to the requirement from [https://github.com/natwest-interview-test/test/blob/main/test-instructions.pdf](https://github.com/natwest-interview-test/test/blob/main/test-instructions.pdf)

### Setup

Run `yarn install` then `yarn start` server is running [http://localhost:9000/](http://localhost:9000/)

### Changes to the initial implementation

 - There were many typos in the node mocked api - these were amended.
 - Added typescript
 - Added jest
 - Added eslint
 - Added react-query for state management and pagination
 - Created domain model
 - Wrote tests - run `yarn test --coverage` for coverage info
 - Created composite component of Display Table
 - Created a filter component
 - Created account display component for nicer formatting of account data
 - Created payments status display component to make status humanly readable
 - Created a way to map the data to the headings giving the table more flexibility for further extension if that would arise
 - Created a hook for fetching payment data

### Further improvements 

To further improve the solution probably implementation of the `intersectionObserver` and automatically
paginating on scroll would be beneficial. Probably dividing the `PaymentsDisplay` component into sub components
would be an improvement. Adding prettier autorunner for nicer code formatting, probably installing a code
style like `Airbnb` eslint rules would improve the code further. Moving out the utility functions outside 
of the relevant components and moving them to a service would be an improvement too.


### React query devtools

You can add devtools to see the state just add `<ReactQueryDevtools initialIsOpen={false} />` within the query client provider block