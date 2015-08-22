package pl.spring.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import pl.spring.demo.entity.AuthorEntity;
import pl.spring.demo.to.AuthorTo;

public class AuthorMapper {
	public static AuthorTo map(AuthorEntity authorEntity) {
		return new AuthorTo(authorEntity.getId(), authorEntity.getFirstName(), authorEntity.getLastName());
	}

	public static AuthorEntity map(AuthorTo authorTo) {
		return new AuthorEntity(authorTo.getId(), authorTo.getFirstName(), authorTo.getLastName());
	}

	public static List<AuthorTo> listEntitymap(List<AuthorEntity> listEntity) {
		List<AuthorTo> listTo = new ArrayList<AuthorTo>();
		for (int i = 0; i < listEntity.size(); i++) {
			listTo.add(map(listEntity.get(i)));
		}
		return listTo;
	}

	public static List<AuthorEntity> listTomap(List<AuthorTo> listTo) {
		List<AuthorEntity> listEntity = new ArrayList<AuthorEntity>();
		for (int i = 0; i < listTo.size(); i++) {
			listEntity.add(map(listTo.get(i)));
		}
		return listEntity;
	}

}
