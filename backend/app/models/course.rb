class Course < ApplicationRecord
  has_many :memberships, dependent: :destroy
end
