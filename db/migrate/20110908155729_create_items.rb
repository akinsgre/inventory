class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.integer :parent_id
      t.string :type

      t.timestamps
    end
  end
end
