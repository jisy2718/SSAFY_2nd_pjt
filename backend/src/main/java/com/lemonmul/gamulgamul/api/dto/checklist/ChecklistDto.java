package com.lemonmul.gamulgamul.api.dto.checklist;

import com.lemonmul.gamulgamul.entity.checklist.Checklist;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class ChecklistDto {
    boolean empty;
    boolean basicEmpty;
    boolean customEmpty;
    List<BasicItemDto> checklistBasicItems;
    List<CustomItemDto> checklistCustomItems;

    public ChecklistDto(Checklist checklist) {
        checklistBasicItems= checklist.getChecklistBasicItems()
                .stream().map(BasicItemDto::new)
                .sorted(BasicItemDto::compareTo).collect(Collectors.toList());
        checklistCustomItems =checklist.getChecklistCustomItems()
                .stream().map(CustomItemDto::new).collect(Collectors.toList());
        basicEmpty=checklistBasicItems.size()<=0;
        customEmpty=checklistCustomItems.size()<=0;
        empty = basicEmpty&&customEmpty;
    }
}
