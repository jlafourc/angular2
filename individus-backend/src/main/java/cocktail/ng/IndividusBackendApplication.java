package cocktail.ng;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import cocktail.ng.individus.Individu;
@SpringBootApplication
public class IndividusBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(IndividusBackendApplication.class, args);
	}

	@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Individu.class);
    }
}
}
