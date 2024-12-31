class MembershipSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :name_kana,
             :membership_start_date,
             :membership_end_date,
             :dojang,
             :course,
             :abbreviation,
             :gender,
             :date_of_birth,
             :postal_code,
             :address1,
             :address2,
             :telephone_number,
             :parents,
             :parents_telephone_number,
             :occupation

  def dojang
    object.dojang&.name
  end

  def course
    object.course&.name
  end

  def gender
    object.gender&.name
  end
end
