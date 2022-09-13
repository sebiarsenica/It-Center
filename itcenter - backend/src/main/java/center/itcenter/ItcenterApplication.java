package center.itcenter;

import center.itcenter.models.*;
import center.itcenter.service.AssetService;
import center.itcenter.service.Asset_EmployeeService;
import center.itcenter.service.CostcenterService;
import net.bytebuddy.asm.Advice;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import center.itcenter.service.employeeService;
import org.springframework.context.annotation.Bean;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ItcenterApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItcenterApplication.class, args);

	}

    @Bean
	CommandLineRunner init(employeeService service)
	{
		return args -> {

		};
	};

}
