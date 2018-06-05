require 'test_helper'

class AllProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get all_products_index_url
    assert_response :success
  end

end
