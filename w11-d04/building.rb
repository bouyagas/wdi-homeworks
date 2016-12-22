class Building
  attr_accessor :address, :num_floors, :apartments, :floor

  def initialize(address, num_floors)
    @address = address
    @num_floors = num_floors
    @apartments = []
    @floor = []
  end


  def add(floor_num, apt)
    @floor.push({floor: floor_num.to_i, apt: apt})
  end

  def floor(num)
    @floor.each do |floor|
      if floor[:floor] == num
        puts floor[:apt]
      end
    end
  end


end
