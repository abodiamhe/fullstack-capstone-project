---
name: User Story - Request Item
about: This template defines a user story for requesting a gift
title: ''
labels: ''
assignees: ''

---

**As a** Registered User
**I need** to be able to view detail of a gift item
**So that** I can comment and express my interest in the gift item

### Details and Assumptions
    * User must be log in
    * User must comment and express interest
    * User must be selected for winning gift

### Acceptance Criteria
    gherkin
    Given the user is logged in
    And comment on gift
    And show interest in the listed gift
    When comment is selected for winning the gift
    And provide all neccessary details
    Then gift should be gifted successuly to the user
