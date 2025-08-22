package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/issues")
public class IssueController {

    private final IssueRepository repo;

    public IssueController(IssueRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Issue createIssue(@RequestBody Issue issue) {
        return repo.save(issue);
    }

    @GetMapping
    public List<Issue> getAllIssues() {
        return repo.findAll();
    }

    @PutMapping("/{id}/close")
    public Issue closeIssue(@PathVariable Long id) {
        Issue issue = repo.findById(id).orElseThrow(() -> new RuntimeException("Ärende inte hittat"));
        issue.setStatus("CLOSED");
        return repo.save(issue);
    }
}
