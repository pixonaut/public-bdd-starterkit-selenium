@blog
Feature: Give me more blog content from Pixo
   Pixo has good blog content. I want more of it
   I should be able to see more content

   @fast
   Scenario: Finding more blog content
      Given I am on the Pixo blog
      When I select the button for the next page of blog content
      Then I should navigate to "page=2" of the Pixo blog posts

   Scenario: Find content on page 4 of the blog
      Given I am on the Pixo blog
      When I select the button for blog page 4
      Then I should navigate to "page=4" of the Pixo blog posts
