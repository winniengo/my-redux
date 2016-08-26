class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, presence: true
end
