require 'byebug'

class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid


    def index
        user = User.all
        render json: user, status: :ok
    end

    def show
        render json: @current_user
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

     def update 


        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {}, status: :ok
    end

    def userHabits
        habits = Habit.where(user_id: @current_user.id)
        render json: habits, status: :ok
    end

    private

    def user_params
        params.permit(:id, :username, :email, :password)
    end

    def not_found
        render json: { error: "User not found"}, status: :not_found
    end

    def invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }
    end

end
