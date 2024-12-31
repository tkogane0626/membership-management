class Dojang < ApplicationRecord
  has_many :memberships, dependent: :destroy
end
