class Api::V1::MembershipsController < ApplicationController
  def index
    memberships = Membership.where(status_flg: true).order(created_at: :asc)

    render(json: memberships, each_serializer: MembershipSerializer)
  end

  def update_membership
    membership = Membership.find(params[:id])

    membership.update!(update_params)

    render(json: { message: 'Membership successfully updated.' }, status: :ok)
  rescue ActiveRecord::RecordNotFound
    render(json: { error: 'Membership not found.' }, status: :not_found)
  rescue ActiveRecord::RecordInvalid => e
    render(json: { error: e.message }, status: :unprocessable_entity)
  end

  def delete_membership
    ActiveRecord::Base.transaction do
      membership = Membership.find(params[:id])
      membership.update!(status_flg: false)
    end

    render(json: { message: 'Membership successfully deactivated.' }, status: :ok)
  rescue ActiveRecord::RecordNotFound
    render(json: { error: 'Membership not found.' }, status: :not_found)
  rescue ActiveRecord::RecordInvalid => e
    render(json: { error: e.message }, status: :unprocessable_entity)
  end

  private

  def update_params
    params.require(:membership).permit(
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
      :occupation
    )
  end
end
