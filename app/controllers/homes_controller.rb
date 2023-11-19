class HomesController < ApplicationController
  def index
    if session
      @user = session[:userinfo]
    else
      @user = null
    end
  end
end
