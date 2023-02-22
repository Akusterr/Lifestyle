class HabitsController < ApplicationController


    def index
        habit = Habit.all
        render json: habit, status: :ok
    end

    def show
        habit = Habit.find(params[:id])
        render json: habit, status: :ok
    end

    def create
        habit = Habit.create(user_params)
        render json: habit, status: :created
    end

    private

    def habit_params
        params.permit(:id, :user_id, :goal, :frequency_num, :frequency_denominator, :start_date, :display_order, :category_id)
    end

end
