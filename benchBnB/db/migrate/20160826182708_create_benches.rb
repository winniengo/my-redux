class CreateBenches < ActiveRecord::Migration[5.0]
  def change
    create_table :benches do |t|
      t.string :description, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :seating, null: false, default: 2
      t.timestamps
    end
  end
end
