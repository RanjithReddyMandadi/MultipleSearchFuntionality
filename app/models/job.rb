class Job < ActiveRecord::Base
  attr_accessible :additional_info, :ctype, :description, :experience_level, :location, :salary, :title
end
