class InventoryController < ApplicationController
def index
  @categories = Category.find(:all)
end

def show
end 

end
