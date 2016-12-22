class Apartment
  require './tenant.rb'

  attr_accessor :unit, :num_beds, :num_baths, :tenants

  def initialize(unit, num_beds, num_baths)
    @unit = unit
    @num_beds = num_beds
    @num_baths = num_baths
    @tenants = []
  end

  def price
    "$#{(@num_beds*1000) + (@num_baths*500)}"
  end

  def studio?
    if num_beds == 1
      true
    else
      false
    end
  end

  def move_in(tenant)
    if @tenants.length < @num_beds
      @tenants.push(tenant)
    else
      puts "We're full! #{tenant.full_name} can't move in!"
    end
  end

  def empty?
    if @tenants.length > 0
      false
    else
      true
    end
  end

  def full?
    if @tenants.length == @num_beds
      true
    else
      false
    end
  end

end
