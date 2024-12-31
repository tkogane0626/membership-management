class Gender < ApplicationRecord
  has_many :memberships, dependent: :destroy
end
