class Item < ActiveRecord::Base
  attr_accessible :name, :description, :type, :parent_id
end
