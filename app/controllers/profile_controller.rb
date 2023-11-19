class ProfileController < ApplicationController
  include Secured
  def index
    @user = session[:userinfo]
  end
end
