class HabitCompletionsController < ApplicationController

    def index
        hc = HabitCompletion.all
        render json: hc, status: :ok
    end

    def show
        hc = HabitCompletion.find(params[:id])
        render json: hc, status: :ok
    end

    def create
        hc = HabitCompletion.create!(hc_params)
        render json: hc, status: :created
    end

    private

    def hc_params
        params.permit(:habit_id)
    end


end
