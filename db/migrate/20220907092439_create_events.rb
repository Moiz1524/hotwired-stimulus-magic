class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :likes_count, default: 0
      t.integer :reposts_count, default: 0

      t.timestamps
    end
  end
end
