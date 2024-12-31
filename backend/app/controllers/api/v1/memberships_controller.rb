class Api::V1::MembershipsController < ApplicationController
  def index
    memberships = Membership.where(status_flg: true).order(created_at: :asc)

    render(json: memberships, each_serializer: MembershipSerializer)
  end
end
