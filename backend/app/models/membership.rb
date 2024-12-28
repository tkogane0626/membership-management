class Membership < ApplicationRecord
  belongs_to :dojang
  belongs_to :course
  belongs_to :gender
end
