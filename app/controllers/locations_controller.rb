class LocationsController < ApplicationController
    def index
        @locations = Location.all
        render json: @locations
    end 
  
    def show
        render json: @location
    end 
  
    def create
  
        @location = Location.new(location_params)
  
        if @location.save
            render json: @location
        end 
    end 
  
    def delete
        @location.destroy
    end 

    private 

    def location_params
        params.permit(:name)
    end 
  
end
