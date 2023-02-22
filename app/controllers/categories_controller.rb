class CategoriesController < ApplicationController

    def index
        c = Category.all
        render json: c, status: :ok
    end

    def show
        c = Category.find(params[:id])
        render json: c, status: :ok
    end

end
