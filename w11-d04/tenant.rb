class Tenant
  attr_accessor :f_name, :l_name, :born_on, :gender, :nickname, :occupation

  def initialize(f_name, l_name, born_on, gender)
    @f_name = f_name
    @l_name = l_name
    @born_on = born_on
    @gender = gender
  end

  def full_name
    if @nickname != nil
      "#{@f_name} '#{@nickname}' #{@l_name}"
    else
      "#{@f_name} #{@l_name}"
    end
  end
end

p1 = Tenant.new("Fran", "Kubelik", "female", "May 8, 1935")
