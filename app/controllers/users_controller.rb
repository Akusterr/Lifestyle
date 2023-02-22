class UsersController < ApplicationController


    def index
        user = User.all
        render json: user, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:id, :username, :email, :password)
    end

end
