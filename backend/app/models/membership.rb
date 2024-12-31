class Membership < ApplicationRecord
  belongs_to :dojang
  belongs_to :course
  belongs_to :gender

  validates :name, presence: true
  validates :name_kana, presence: true
  validates :address1, presence: true
end
