class HabitCompletionsController < ApplicationController

    def index
        hc = HabitCompletion.all
        render json: hc, status: :ok
    end

    def show
        hc = HabitCompletion.find(params[:id])
        render json: hc, status: :ok
    end


end
