package pl.spring.demo.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "BOOK")
public class BookEntity implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false, length = 50)
	private String title;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinTable(name = "BOOK_AUTHOR", joinColumns = {
			@JoinColumn(name = "BOOK_ID", nullable = false, updatable = false) }, inverseJoinColumns = {
					@JoinColumn(name = "AUTHOR_ID", nullable = false, updatable = false) })
	List<AuthorEntity> authors = new ArrayList<AuthorEntity>();

	// for hibernate
	protected BookEntity() {
	}

	public BookEntity(Long id, String title, List<AuthorEntity> authors) {
		this(id, title);
		this.authors = authors;
	}

	public BookEntity(Long id, String title) {
		this.id = id;
		this.title = title;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<AuthorEntity> getAuthors() {
		return authors;
	}

	public void putAuthors(List<AuthorEntity> authors) {
		this.authors = authors;
	}

}
