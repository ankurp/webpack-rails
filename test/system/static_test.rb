require "application_system_test_case"

class StaticTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit '/'
  
    assert_selector "h1", text: "Hello React!"
  end
end
